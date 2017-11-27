export const watchCompany = id => {
  return (
    $.ajax({
    method: 'POST',
    url: `/api/companies/${id}/watchlist_item`,
    })
  );
};

export const unwatchCompany = id => {
  return (
    $.ajax({
    method: 'DELETE',
    url: `/api/companies/${id}/watchlist_item`,
    })
  );
};
