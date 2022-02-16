export function getFieldsById(state, id){
  let res = []
  state.fields.forEach(item => {
    if (item.id === id){
      res.push(item.field_name)
    }
   
  })
  return res;
}