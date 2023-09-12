import type { Tidy5eTheme } from 'src/types/theme';

export const defaultLightTheme: Tidy5eTheme = {
  name: 'T5EK.Settings.SheetTheme.light',
  id: 'light',
  description: 'The default Tidy 5e Light theme.',
  variables: {
    '--t5ek-title-font-family':
      "'Modesto Condensed', 'Palatino Linotype', serif",
    '--t5ek-body-font-family': "'Signika', sans-serif",
    '--t5ek-primary-font-color': 'rgba(0, 0, 0, 0.9)',
    '--t5ek-background': 'rgba(236, 233, 223, 1)',
    '--t5ek-faintest-color': 'rgba(0, 0, 0, 0.05)',
    '--t5ek-faint-color': 'rgba(0, 0, 0, 0.1)',
    '--t5ek-light-color': 'rgba(0, 0, 0, 0.25)',
    '--t5ek-primary-color': 'rgba(0, 0, 0, 0.9)',
    '--t5ek-secondary-color': 'rgba(0, 0, 0, 0.65)',
    '--t5ek-tertiary-color': 'rgba(0, 0, 0, 0.4)',
    '--t5ek-primary-accent-color': 'rgba(255, 100, 0, 1)',
    '--spell-level-button-available-slots-text-color': 'white',
    '--t5ek-white': 'rgba(255, 255, 255, 1)',
    '--t5ek-faint-white': 'rgba(255, 255, 255, 0.2)',
    '--t5ek-linked-accent-color': 'rgba(0, 255, 0, 0.75)',
    '--t5ek-unlinked-accent-color': 'rgba(255, 0, 0, 0.75)',
    '--t5ek-linked-light-color': 'rgba(0, 255, 0, 0.4)',
    '--t5ek-unlinked-light-color': 'rgba(255, 0, 0, 0.4)',
    '--t5ek-sheet-unlocked-icon-background': 'rgba(0, 150, 100, 0.6)',
    '--t5ek-sheet-locked-icon-background': 'rgba(255, 0, 0, 0.6)',
    '--t5ek-header-background': 'rgba(255, 255, 255, 0.2)',
    '--t5ek-header-border-color': 'rgba(0, 0, 0, 0.25)',
    '--t5ek-prepareable-color': 'rgba(119, 136, 153, 1)',
    '--t5ek-equipped-background': 'rgba(50, 205, 50, 0.3)',
    '--t5ek-equipped-item-grid-tile-outline-color': 'rgba(50, 205, 50, 1)',
    '--t5ek-equipped-item-grid-tile-accent-color': 'rgba(173, 255, 47, 1)',
    '--t5ek-prepared-background': 'rgba(50, 205, 50, 0.3)',
    '--t5ek-prepared-item-grid-tile-outline-color': 'rgba(50, 205, 50, 1)',
    '--t5ek-prepared-item-grid-tile-accent-color': 'rgba(173, 255, 47, 1)',
    '--t5ek-pact-background': 'rgba(250, 0, 180, 0.3)',
    '--t5ek-pact-outline-color': 'rgba(250, 50, 213, 1)',
    '--t5ek-pact-accent-color': 'rgba(198, 119, 193, 1)',
    '--t5ek-atwill-background': 'rgba(226, 246, 4, 0.3)',
    '--t5ek-atwill-outline-color': 'rgba(163, 165, 50, 1)',
    '--t5ek-atwill-accent-color': 'rgba(255, 242, 0, 1)',
    '--t5ek-innate-background': 'rgba(255, 0, 0, 0.3)',
    '--t5ek-innate-outline': 'rgba(231, 23, 23, 1)',
    '--t5ek-innate-accent': 'rgba(195, 69, 69, 1)',
    '--t5ek-alwaysprepared-background': 'rgba(0, 0, 255, 0.15)',
    '--t5ek-alwaysprepared-outline-color': 'rgba(65, 105, 225, 1)',
    '--t5ek-alwaysprepared-accent-color': 'rgba(0, 191, 255, 1)',
    '--t5ek-magic-accent-color': 'rgba(255, 255, 0, 1)',
    '--t5ek-faint-magic-item-list-row-accent-color': 'rgba(255, 255, 0, 0.6)',
    '--t5ek-magic-item-grid-tile-outline-color': 'rgba(175, 255, 47, 1)',
    '--t5ek-attunement-required-color': 'rgba(205, 92, 92, 1)',
    '--t5ek-attuned-item-grid-icon-color': 'rgba(0, 0, 0, 0.4)',
    '--t5ek-xp-bar-background': 'rgba(94, 225, 146, 1)',
    '--t5ek-encumbrance-bar-background': 'rgba(108, 138, 165, 1)',
    '--t5ek-encumbrance-bar-outline-color': 'rgba(205, 228, 255, 1)',
    '--t5ek-encumbrance-outline-color': 'rgba(0, 0, 0, 0.9)',
    '--t5ek-warning-accent-color': 'rgba(255, 0, 0, 0.6)',
    '--t5ek-icon-background': 'rgba(236, 233, 223, 1)',
    '--t5ek-icon-shadow-color': 'rgba(0, 0, 0, 0.4)',
    '--t5ek-icon-outline-color': 'rgba(0, 0, 0, 0.4)',
    '--t5ek-icon-font-color': 'rgba(0, 0, 0, 0.4)',
    '--t5ek-icon-hover-color': 'rgba(0, 0, 0, 0.9)',
    '--t5ek-ability-modifiers-hover-label-background': 'rgba(0, 0, 0, 0.9)',
    '--t5ek-exhaustion-intensity1-background': 'rgba(255, 230, 0, 1)',
    '--t5ek-exhaustion-intensity2-background': 'rgba(255, 130, 0, 1)',
    '--t5ek-exhaustion-intensity3-background': 'rgba(255, 50, 0, 1)',
    '--t5ek-ability-accent-background': 'darkslategrey',
    '--t5ek-context-outline-color': 'rgba(0, 0, 0, 0.4)',
    '--t5ek-context-shadow-color': 'rgba(0, 0, 0, 0.65)',
    '--t5ek-check-default-background-image':
      "url('/modules/tidy5e-sheet-kgar/images/check-dark-unchecked.svg')",
    '--t5ek-check-checked-background-image':
      "url('/modules/tidy5e-sheet-kgar/images/check-dark-checked.svg')",
    '--t5ek-checkbox-font-color': 'rgba(0, 0, 0, 0.9)',
    '--t5ek-checkbox-outline-color': 'rgba(150, 150, 150, 1)',
    '--t5ek-checkbox-unchecked-color': '#d8d7d1',
    '--t5ek-checkbox-checked-color': 'rgba(0, 255, 0, 0.3)',
    '--t5ek-item-input-background': 'rgba(255, 255, 255, 0.3)',
    '--t5ek-item-input-hover-background': 'rgba(255, 255, 255, 0.5)',
    '--t5ek-encumbrance-text-color': 'rgba(238, 238, 238, 1)',
    '--t5ek-death-save-icon-color': 'rgba(255, 255, 255, 0.75)',
    '--t5ek-death-save-text-color': 'white',
    '--t5ek-inspiration-hover-color': 'rgba(255, 255, 255, 0.75)',
    '--t5ek-inspiration-text-shadow-hover-color': 'rgba(118, 228, 255, 0.5)',
    '--t5ek-inspiration-inspired-text-shadow-color': '#76e4ff',
    '--t5ek-inspiration-inspired-background': 'rgba(153, 153, 153, 1)',
    '--t5ek-vehicle-motion-hover-color': 'rgba(255, 255, 255, 0.75)',
    '--t5ek-vehicle-motion-text-shadow-hover-color': 'rgba(118, 228, 255, 0.5)',
    '--t5ek-vehicle-in-motion-text-shadow-color': '#76e4ff',
    '--t5ek-vehicle-in-motion-background': 'rgba(153, 153, 153, 1)',
    '--t5ek-hp-bar-color': 'rgba(0, 200, 0, 0.6)',
    '--t5ek-death-save-backdrop-background': 'rgba(255, 0, 0, 0.5)',
    '--t5ek-death-save-text-shadow-color': 'rgb(34, 34, 34)',
    '--t5ek-hp-overlay-background': 'rgba(255, 0, 0, 1)',
    '--t5ek-inventory-grid-image-contrast-text-shadow-color':
      'rgba(0, 0, 0, 1)',
    '--t5ek-inventory-grid-hover-use-item-contrast-text-shadow-color':
      'rgba(255, 255, 255, 1)',
    '--t5ek-item-info-card-background': "url('../../../ui/parchment.jpg')",
    '--t5ek-content-entity-link-color': 'var(--t5ek-primary-font-color)',
    '--t5ek-content-entity-link-hover-color': 'var(--t5ek-white)',
    '--t5ek-content-entity-link-background': 'var(--t5ek-faintest-color)',
    '--t5ek-content-entity-link-hover-background':
      'var(--t5ek-primary-accent-color)',
    '--t5ek-activated-profile-toggle-color': 'var(--t5ek-white)',
    '--t5ek-exhaustion-intensity1-color': 'var(--t5ek-icon-font-color)',
    '--t5ek-exhaustion-intensity2-color': 'rgba(255, 255, 255, 0.7)',
    '--t5ek-exhaustion-intensity3-color': 'rgba(255, 255, 255, 0.7)',
    '--t5ek-tinymce-toolbar-background': 'transparent',
    '--t5ek-item-info-card-box-shadow-color': 'rgba(0, 0, 0, 0.5)',
    '--t5ek-sheet-lock-icon-color': 'rgba(255, 255, 255, 0.6)',
    '--t5ek-grid-pane-favorite-icon-color': 'rgba(0, 200, 100, 1)',
    '--t5ek-settings-dialog-box-shadow-color': 'rgba(0, 0, 0, 0.75)',
    '--t5ek-sheet-lock-icon-hover-color': '#fff',
    '--t5ek-scrollbar-thumb': '#782e22',
    '--t5ek-scrollbar-track': '#0000',
    '--t5ek-settings-dialog-border-color': '#ff6400',
    '--t5ek-spell-level-button-border-color': '#c9c7b8',
    '--t5ek-ability-modifiers-label-text-color': '#fff',
    '--t5ek-ability-mod-text-color': '#fff',
    '--t5ek-ability-mod-save-text-hover-color': '#fff',
    '--t5ek-encumbrance-bar-text-shadow-color': '#000',
  },
};
