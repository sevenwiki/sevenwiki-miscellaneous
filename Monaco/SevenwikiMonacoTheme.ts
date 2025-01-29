export const SevenwikiMonacoTheme = {
  base: 'vs-dark',
  inherit: true,
  rules: [
    { token: 'keyword', foreground: '#FFD700' },
    { token: 'comment', foreground: '#959da5' },
    { token: 'number', foreground: '#67dbaf' },
    { token: 'escape', foreground: '#addb67' },
    { token: 'string', foreground: '#ffffff' },
    { token: 'bolditalic', foreground: '#c9c9c9', fontStyle: 'bold italic' },
    { token: 'bold', foreground: '#c9c9c9', fontStyle: 'bold' },
    { token: 'italic', foreground: '#c9c9c9', fontStyle: 'italic' },
    { token: 'underline', foreground: '#c9c9c9', fontStyle: 'underline' }, // 밑줄
    { token: 'strikethrough', foreground: '#c9c9c9', fontStyle: 'strikethrough' }, // 취소선
    { token: 'superscript', foreground: '#c9c9c9', fontStyle: 'superscript' }, // 윗첨자
    { token: 'subscript', foreground: '#c9c9c9', fontStyle: 'subscript' }, // 아래첨자
  ],
  colors: {
    'editor.foreground': '#FFFFFF',
    'editor.background': '#1A1A1A',
    'editorCursor.foreground': '#FFFFFF',
    'editorLineNumber.foreground': '#A0A0A0',
    'editor.selectionBackground': '#4B4B4B',
    'editor.lineHighlightBackground': '#2C2C2C',
    'editorWhitespace.foreground': '#404040',
  },
}
