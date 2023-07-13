import { CONSTANTS } from 'src/constants';
import { FoundryAdapter } from 'src/foundry/foundry-adapter';

export function initTidy5eContextMenu(
  html: any,
  contextMenuSelector: string = '.tidy5e-item-list .item'
) {
  new ContextMenu(html, contextMenuSelector, [], {
    onOpen: onItemContext.bind(this),
  });
}

/**
 * Handle activation of a context menu for an embedded Item or ActiveEffect document.
 * Dynamically populate the array of context menu options.
 * @param {HTMLElement} element       The HTML element for which the context menu is activated
 * @protected
 */
function onItemContext(element: any) {
  // Active Effects
  if (element.classList.contains('effect')) {
    const effect = this.actor.effects.get(element.dataset.effectId);
    if (!effect) return;
    ui.context.menuItems = getActiveEffectContextOptions(effect);
    Hooks.call(
      'dnd5e.getActiveEffectContextOptions',
      effect,
      ui.context.menuItems,
      { source: CONSTANTS.MODULE_ID }
    );
  }
  // Items
  else {
    const item = this.actor.items.get(element.dataset.itemId);
    if (!item) return;
    ui.context.menuItems = getItemContextOptions(item);
    Hooks.call('dnd5e.getItemContextOptions', item, ui.context.menuItems);
  }
}

function getActiveEffectContextOptions(effect: any) {
  const actor = effect.actor ? effect.actor : effect.parent;
  if (!actor?.isOwner) {
    return;
  }

  if (FoundryAdapter.getGameSetting('rightClickDisabled')) {
    return [];
  } else {
    let tidy5eKgarContextOptions = [
      {
        name: effect.disabled
          ? 'DND5E.ContextMenuActionEnable'
          : 'DND5E.ContextMenuActionDisable',
        icon: effect.disabled
          ? "<i class='fas fa-check fa-fw'></i>"
          : "<i class='fas fa-times fa-fw'></i>",
        callback: () => effect.update({ disabled: !effect.disabled }),
      },
      {
        name: 'DND5E.ContextMenuActionEdit',
        icon: "<i class='fas fas fa-pencil-alt fa-fw'></i>",
        callback: () => effect.sheet.render(true),
      },
    ];

    if (FoundryAdapter.tryGetFlag(actor, 'allow-edit')) {
      tidy5eKgarContextOptions = tidy5eKgarContextOptions.concat([
        {
          name: 'DND5E.ContextMenuActionDuplicate',
          icon: "<i class='fas fa-copy fa-fw'></i>",
          callback: () =>
            effect.clone(
              {
                label: game.i18n.format('DOCUMENT.CopyOf', {
                  name: effect.label,
                }),
              },
              { save: true }
            ),
        },
        {
          name: 'DND5E.ContextMenuActionDelete',
          icon: `<i class="fas fa-trash fa-fw t5ek-warning-color"></i>`,
          callback: () => effect.deleteDialog(),
        },
      ]);
    }

    return tidy5eKgarContextOptions;
  }
}

/**
 * Prepare an array of context menu options which are available for owned Item documents.
 * @param {Item5e} item                   The Item for which the context menu is activated
 * @returns {ContextMenuEntry[]}          An array of context menu options offered for the Item
 * @protected
 */
function getItemContextOptions(item) {
  const actor = item.actor ? item.actor : item.parent;
  if (!actor) {
    return;
  }
  let options = [];

  const isCharacter = actor.type === 'character';
  const isNPC = actor.type === 'npc';
  const isVehicle = actor.type === 'vehicle';

  const allowCantripToBePreparedOnContext = game.settings.get(
    CONSTANTS.MODULE_ID,
    'allowCantripToBePreparedOnContext'
  );
  let toggleClass = '';
  let toggleTitle = '';
  let canToggle = false;
  let isActive = false;
  let canPrepare = false;

  if (item.type === 'spell') {
    const prep = item.system.preparation || {};
    const isAlways = prep.mode === 'always';
    const isPrepared = !!prep.prepared;
    isActive = isPrepared;
    toggleClass = isPrepared ? 'active' : '';
    if (isAlways) toggleClass = 'fixed';
    if (isAlways) toggleTitle = CONFIG.DND5E.spellPreparationModes.always;
    else if (isPrepared)
      toggleTitle = CONFIG.DND5E.spellPreparationModes.prepared;
    else toggleTitle = game.i18n.localize('DND5E.SpellUnprepared');

    canPrepare = item.system.level >= 1;
  } else {
    isActive = !!item.system.equipped;
    toggleClass = isActive ? 'active' : '';
    toggleTitle = game.i18n.localize(
      isActive ? 'DND5E.Equipped' : 'DND5E.Unequipped'
    );
    canToggle = 'equipped' in item.system;

    canPrepare = item.system.level >= 1;
  }

  // Toggle Attunement State
  if (
    'attunement' in item.system &&
    item.system.attunement !== CONFIG.DND5E.attunementTypes.NONE
  ) {
    const isAttuned =
      item.system.attunement === CONFIG.DND5E.attunementTypes.ATTUNED;
    // options.push({
    //   name: isAttuned ? "DND5E.ContextMenuActionUnattune" : "DND5E.ContextMenuActionAttune",
    //   icon: "<i class='fas fa-sun fa-fw'></i>",
    //   callback: () => item.update({
    //     "system.attunement": CONFIG.DND5E.attunementTypes[isAttuned ? "REQUIRED" : "ATTUNED"]
    //   })
    // });
    options.push({
      name: isAttuned ? 'TIDY5E.Deattune' : 'TIDY5E.Attune',
      icon: isAttuned
        ? "<i class='fas fa-sun fa-fw' style='color: rgba(255, 30, 0, 0.65);'></i>"
        : "<i class='fas fa-sun fa-fw'></i>",
      callback: () =>
        item.update({
          'system.attunement':
            CONFIG.DND5E.attunementTypes[isAttuned ? 'REQUIRED' : 'ATTUNED'],
        }),
    });
  }

  // Toggle Equipped State
  if ('equipped' in item.system) {
    // options.push({
    //   name: item.system.equipped ? "DND5E.ContextMenuActionUnequip" : "DND5E.ContextMenuActionEquip",
    //   icon: "<i class='fas fa-shield-alt fa-fw'></i>",
    //   callback: () => item.update({"system.equipped": !item.system.equipped})
    // });
    const isEquipped = item.system.equipped;
    options.push({
      name: isEquipped ? 'TIDY5E.Unequip' : 'TIDY5E.Equip',
      icon: isEquipped
        ? "<i class='fas fa-user-alt fa-fw' style='color: rgba(255, 30, 0, 0.65);'></i> "
        : "<i class='fas fa-user-alt fa-fw'></i> ",
      callback: () => item.update({ 'system.equipped': !isEquipped }),
    });
  }

  // Toggle Prepared State
  if ('preparation' in item.system) {

    const isPrepared = item.system?.preparation?.prepared;
    if (allowCantripToBePreparedOnContext) {
      if (item.system.preparation.mode != 'always') {
        options.push({
          name: isActive ? 'TIDY5E.Unprepare' : 'TIDY5E.Prepare',
          icon: isActive
            ? "<i class='fas fa-book fa-fw'></i>"
            : "<i class='fas fa-book fa-fw'></i>",
          callback: () =>
            item.update({ 'system.preparation.prepared': !isPrepared }),
        });
      }
    } else {
      if (canPrepare && item.system.preparation.mode != 'always') {
        options.push({
          name: isActive ? 'TIDY5E.Unprepare' : 'TIDY5E.Prepare',
          icon: isActive
            ? "<i class='fas fa-book fa-fw'></i>"
            : "<i class='fas fa-book fa-fw'></i>",
          callback: () =>
            item.update({ 'system.preparation.prepared': !isPrepared }),
        });
      }
    }
  }

  // TODO SUPPORT FAVORITE ON NPC ?
  if (isCharacter) {
    // Add favorites to context menu
    let isFav = isItemFavorite(item);

    let favoriteColor = 'rgba(0, 0, 0, 0.65)'; //Standard black
    let favoriteIcon = 'fa-bookmark';
    if (game.modules.get('favorite-items')?.active) {
      favoriteIcon = game.settings.get('favorite-items', 'favorite-icon');
      favoriteColor = game.settings.get('favorite-items', 'favorite-color');
    }
    options.push({
      name: isFav ? 'TIDY5E.RemoveFav' : 'TIDY5E.AddFav',
      icon: isFav
        ? `<i class='fas ${favoriteIcon} fa-fw'></i>`
        : `<i class='fas ${favoriteIcon} fa-fw inactive'></i>`,
      callback: () => {
        // const item_id = ev[0].dataset.itemId; //ev.currentTarget.closest('[data-item-id]').dataset.itemId;
        // const item = actor.items.get(item_id);
        if (!item) {
          warn(
            `tidy5e-context-menu | _getItemContextOptions | Item no founded!`
          );
          return;
        }
        let isFav = isItemFavorite(item);

        item.update({
          'flags.tidy5e-sheet.favorite': !isFav,
        });
        // Sync favorite flag with module 'favorite-items'
        if (game.modules.get('favorite-items')?.active) {
          item.update({
            'flags.favorite-items.favorite': !isFav,
          });
        }
        // Sync favorite flag with module 'favtab'
        if (game.modules.get('favtab')?.active) {
          item.update({
            'flags.favtab.isFavorite': !isFav,
          });
        }
      },
    });
  }
  /*
 // Standard Options
 const options = [
   {
     name: "DND5E.ContextMenuActionEdit",
     icon: "<i class='fas fa-edit fa-fw'></i>",
     callback: () => item.sheet.render(true)
   },
   {
     name: "DND5E.ContextMenuActionDuplicate",
     icon: "<i class='fas fa-copy fa-fw'></i>",
     condition: () => !["race", "background", "class", "subclass"].includes(item.type),
     callback: () => item.clone({name: game.i18n.format("DOCUMENT.CopyOf", {name: item.name})}, {save: true})
   },
   {
     name: "DND5E.ContextMenuActionDelete",
     icon: "<i class='fas fa-trash fa-fw'></i>",
     callback: () => item.deleteDialog()
   }
 ]
 */

  if (item.type === 'spell') {
    options.push({
      name: 'TIDY5E.EditSpell',
      icon: "<i class='fas fa-pencil-alt fa-fw'></i>",
      callback: () => item.sheet.render(true),
    });
    if (actor.getFlag(CONSTANTS.MODULE_ID, 'allow-edit')) {
      options.push({
        name: 'DND5E.ContextMenuActionDuplicate',
        icon: "<i class='fas fa-copy fa-fw'></i>",
        condition: () =>
          !['race', 'background', 'class', 'subclass'].includes(item.type),
        callback: () =>
          item.clone(
            { name: game.i18n.format('DOCUMENT.CopyOf', { name: item.name }) },
            { save: true }
          ),
      });
      options.push({
        name: 'TIDY5E.DeleteSpell',
        icon: "<i class='fas fa-trash fa-fw' style='color: rgba(255, 30, 0, 0.65);'></i>",
        callback: () => item.deleteDialog(),
      });
    }
  } else {
    options.push({
      name: 'DND5E.ContextMenuActionEdit',
      icon: "<i class='fas fa-pencil-alt fa-fw'></i>",
      callback: () => item.sheet.render(true),
    });

    if (actor.getFlag(CONSTANTS.MODULE_ID, 'allow-edit')) {
      options.push({
        name: 'DND5E.ContextMenuActionDuplicate',
        icon: "<i class='fas fa-copy fa-fw'></i>",
        condition: () =>
          !['race', 'background', 'class', 'subclass'].includes(item.type),
        callback: () =>
          item.clone(
            { name: game.i18n.format('DOCUMENT.CopyOf', { name: item.name }) },
            { save: true }
          ),
      });
      options.push({
        name: 'DND5E.ContextMenuActionDelete',
        icon: "<i class='fas fa-trash fa-fw' style='color: rgba(255, 30, 0, 0.65);'></i>",
        callback: () => item.deleteDialog(),
      });
    }
  }
  return options;
}