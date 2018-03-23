export function listChecklists( setChecklists ) {
  let checklistArr = [];
  return fetch('/checklists')
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      const {checklists} = json;
      setChecklists(checklists);
    });
}
