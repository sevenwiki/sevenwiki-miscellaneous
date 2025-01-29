export const SevenMarkHighlightingRules = {
  defaultToken: '',
  tokenPostfix: '.sevenmark',
  keywords: [
    'True',
    'None',
    'False',
    'include',
    'style',
    '#url',
    '#style',
    '#size',
    '#x',
    '#y',
    '#table',
    '#quote',
    '#list',
  ],
  brackets: [
    { open: '{', close: '}', token: 'delimiter.curly' },
    { open: '[', close: ']', token: 'delimiter.bracket' },
    { open: '(', close: ')', token: 'delimiter.parenthesis' },
  ],
  tokenizer: {
    root: [
      { include: '@whitespace' },
      { include: '@numbers' },

      [/[{}\[\]()]/, '@brackets'],
      [
        /[a-zA-Z#]\w*/,
        {
          cases: {
            '@keywords': 'keyword',
            '@default': 'identifier',
          },
        },
      ],
      { include: '@linecontent' },
      { include: '@strings' },
    ],
    whitespace: [
      [/\s+/, 'white'],
      [/\/\*/, 'comment', '@comment'],
      [/\/\/.*$/, 'comment'],
    ],
    comment: [
      [/[^\/*]+/, 'comment'],
      [/\*\//, 'comment', '@pop'],
      [/[\/*]/, 'comment'],
    ],
    numbers: [
      [/-?0x([abcdef]|[ABCDEF]|\d)+[lL]?/, 'number.hex'],
      [/-?(\d*\.)?\d+([eE][+\-]?\d+)?[jJ]?[lL]?/, 'number'],
    ],
    linecontent: [
      // various markdown
      [/\*\*\*[^*]+\*\*\*/, 'bolditalic'], // 볼드체
      [/\*\*[^*]+\*\*/, 'bold'], // 볼드체
      [/\*[^*]+\*/, 'italic'], // 이탤릭체
      [/__[^_]+__/, 'underline'], // 밑줄 추가
      [/~~[^~]+~~/, 'strikethrough'], // 취소선

      // Superscript
      [/\^\^[^^]+\^\^/, 'superscript'], // 윗첨자

      // Subscript
      [/,,[^,]+,,/, 'subscript'], // 아래첨자
    ],
    strings: [
      [/[^\\\[\](){}]+/, 'string'], // 일반 문자열
      [/\\./, 'escape'], // escaping
    ],
  },
}
