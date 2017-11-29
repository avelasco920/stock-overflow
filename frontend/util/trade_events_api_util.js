export const makeTrade = (id, event ) => (
  $.ajax({
    method: 'POST',
    url: `/api/companies/${id}`,
    data: event
  })
);
