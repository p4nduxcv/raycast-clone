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
            <div className="modal-drawer_left">
              <p>Spaces and Stacks</p>
              <div className="modal-drawer_left__element">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9zm-8-3l3.359-3.359a2.25 2.25 0 1 0-3.182-3.182l-.177.177-.177-.177a2.25 2.25 0 1 0-3.182 3.182L12 17z"
                    fill="rgba(216,0,0,1)"
                  />
                </svg>
                <p>Personal</p>
              </div>

              <div
                style={{ paddingLeft: "0" }}
                className="modal-drawer_left__element modal-drawer_left__selection"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4zM4 15v4h16v-4H4zm7-4v2h2v-2h-2zM9 3v2h6V3H9z"
                    fill="rgba(155,89,182,1)"
                  />
                </svg>
                <p>Work</p>
              </div>

              <div className="modal-drawer_left__submenu">
                <p>Dashboard</p>
                <p>Tools</p>
                <p>Decks</p>
              </div>

              <div className="modal-drawer_left__element">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M21 4H7a2 2 0 1 0 0 4h14v13a1 1 0 0 1-1 1H7a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h13a1 1 0 0 1 1 1v1zm-1 3H7a1 1 0 1 1 0-2h13v2z"
                    fill="rgba(50,152,219,1)"
                  />
                </svg>
                <p>Reading List</p>
              </div>

              <div className="modal-drawer_left__element">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.5-8v2H11v2h2v-2h1a2.5 2.5 0 1 0 0-5h-4a.5.5 0 1 1 0-1h5.5V8H13V6h-2v2h-1a2.5 2.5 0 0 0 0 5h4a.5.5 0 1 1 0 1H8.5z"
                    fill="rgba(241,196,14,1)"
                  />
                </svg>
                <p>Side Hustle</p>
              </div>
            </div>
            <div className="modal-drawer_right">32</div>
          </div>

          <div className="footer">dsd</div>
        </div>
      </div>
    </div>
  );
};

export default TableModal;
