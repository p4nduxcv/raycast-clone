import "../TableModal/TableModal.scss";
const TableModal = (props) => {
  return (
    <div className="tableModal-fixed">
      <div className="backdrop" />

      <div className="modal">
        <input
          placeholder="Where To ?"
          className="modal-text"
          type="text"
        ></input>
        <div className="modal-lr">
          <div className="modal-drawer">
            <div className="modal-drawer_left">12</div>
            <div className="modal-drawer_right">32</div>
          </div>

          <div className="footer">dsd</div>
        </div>
      </div>
    </div>
  );
};

export default TableModal;
