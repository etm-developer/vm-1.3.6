module.exports = {
  table: 'variables',
  tableFields: [
    {
      name: 'key',
      type: 'String',
      length: 256,
      not_null: true,
      primary_key: true
    },
    {
      name: 'value',
      type: 'String',
      length: 256,
      not_null: true
    }
  ]
}