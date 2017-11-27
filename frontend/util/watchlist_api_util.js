const APIUtil = {
  watchCompany: id => APIUtil.changeWatchStatus(id, 'POST'),

  unwatchCompany: id => APIUtil.changeWatchStatus(id, 'DELETE'),

  changeWatchStatus: (id, method) => (
    $.ajax({
      url: `/companies/${id}/watchlist_item`,
      dataType: 'json',
      method
    })
  ),
};

module.exports = APIUtil;
