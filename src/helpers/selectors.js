export function getFieldsById(state, id){
  
  let res = []
  console.log(state.fields)
  if(state.fields === null) return []
  state.fields.forEach(item => {
    if (item.application_id === id){
      res.push(item.field_name)
    }
   
  })
  return res;
}