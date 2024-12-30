export const SevenwikiMonacoTheme = {
  base: 'vs-dark',
  inherit: true,
  rules: [
    { token: 'keyword', foreground: '#FFD700' },
    { token: 'comment', foreground: '#959da5' },
    { token: 'number', foreground: '#67dbaf' },
    { token: 'escape', foreground: '#addb67' },
    { token: 'string', foreground: '#ffffff' },
    { token: 'bolditalic', foreground: '#FF7DC4', fontStyle: 'bold italic' },
    { token: 'bold', foreground: '#FF7D7D', fontStyle: 'bold' },
    { token: 'italic', foreground: '#FFAE7D', fontStyle: 'italic' },
    { token: 'underline', foreground: '#c9c9c9', fontStyle: 'underline' }, // 밑줄
    { token: 'strikethrough', foreground: '#c9c9c9', fontStyle: 'strikethrough' }, // 취소선
    { token: 'superscript', foreground: '#97DBF7', fontStyle: 'superscript' },  // 윗첨자
    { token: 'subscript', foreground: '#B8D787', fontStyle: 'subscript' },  // 아래첨자
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
