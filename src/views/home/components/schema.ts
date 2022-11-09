const asideSchema: any[] = [
  {
    id: 1,
    index: undefined,
    name: '文本工具',
    children: [
      {
        id: 1,
        index: '/tools/excelTool',
        name: '字符串转列表',
      },
      {
        id: 2,
        index: undefined,
        name: '英文文本转换',
        children: [
          {
            id: 1,
            index: '/tools/englishText',
            name: '英文大小写转换',
          },
        ],
      },
    ],
  },
];

export default asideSchema;
