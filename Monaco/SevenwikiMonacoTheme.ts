export const SevenwikiMonacoTheme = {
    base: 'vs-dark',
    inherit: true,
    rules: [
      { token: 'heading', foreground: '#FF0000' },
      { token: 'bold', foreground: '#00FF00' },
      { token: 'italic', foreground: '#0000FF' },
      { token: 'link', foreground: '#FF00FF' },
      { token: 'code', foreground: '#FFFF00' },
      { token: 'text', foreground: '#FFFFFF' },
    ],
    colors: {
      'editor.foreground': '#FFFFFF',
      'editor.background': '#1E1E1E',
      'editorCursor.foreground': '#FFFFFF',
      'editorLineNumber.foreground': '#A0A0A0',
      'editor.selectionBackground': '#4B4B4B',
      'editor.lineHighlightBackground': '#2C2C2C',
      'editorWhitespace.foreground': '#404040',
    },
  }
  