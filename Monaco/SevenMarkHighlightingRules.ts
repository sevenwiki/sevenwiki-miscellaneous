export const SevenMarkHighlightingRules = {
    tokenizer: {
      root: [
        [/#\s.*/, 'heading'], // 제목
        [/\*\*[^*]+\*\*/, 'bold'], // 볼드체
        [/\*[^*]+\*/, 'italic'], // 이탤릭체
        [/\[([^\]]+)\]\(([^)]+)\)/, 'link'], // 링크
        [/\`[^`]+\`/, 'code'], // 코드
        [/^\s*[-\*]\s.*/, 'list'], // 리스트
        [/^\s*>\s.*/, 'quote'], // 인용
        [/[^\s]+/, 'text'], // 일반 텍스트
      ],
    },
  }
  