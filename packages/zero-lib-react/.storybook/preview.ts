import type { Preview } from '@storybook/react'
import { themes } from '@storybook/theming'
import './../src/globals.css'
import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

const CUSTOM_VIEWPORTS = {
  kindleFire2: {
    name: 'Kindle Fire 2',
    styles: {
      width: '600px',
      height: '963px',
    },
  },
  kindleFireHD: {
    name: 'Kindle Fire HD',
    styles: {
      width: '533px',
      height: '801px',
    },
  },
}

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS,
        ...CUSTOM_VIEWPORTS,
      },
    },
    docs: {
      theme: themes.dark,
    },
    backgrounds: {
      default: 'zinc-900',
      values: [
        {
          name: 'zinc-900',
          value: '#18181b',
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
