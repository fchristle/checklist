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

export function getChecklist( checklistId,  setChecklist ) {
  fetch(`/checklists/${checklistId}`)
    .then((response) => {
      return response.json();
    })
    .then((checklist) => {
      setChecklist(checklist);
    });
}
