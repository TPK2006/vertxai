import React from 'react';
import './styles.css';

const EquityCapTable = () => {
  return (
    <div className="equity-container">
      {/* Back Button */}
      <button className="back-button">
        <svg className="back-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <h1 className="main-title">Equity and Cap Table Management</h1>

        {/* What is section */}
        <section className="content-section">
          <h2 className="section-title">What is equity & cap table management?</h2>
          <p className="section-text">
            Equity refers to ownership in a startup, typically divided among founders, investors, and employees.
          </p>
          <p className="section-text">
            A Cap Table (Capitalization Table) is a document that tracks:
          </p>
          <ul className="section-list">
            <li>Who owns what % of the company.</li>
            <li>How ownership changes with fundraising.</li>
            <li>Dilution effects after new investments.</li>
          </ul>
        </section>

        {/* Why Important section */}
        <section className="content-section">
          <h2 className="section-title">Why it is important</h2>
          <ul className="section-list">
            <li>Founders need to track dilution when raising funds.</li>
            <li>Investors use it to calculate their ownership & exit value.</li>
            <li>Employees with stock options see their potential earnings.</li>
          </ul>
        </section>

        {/* Remember Table section */}
        <section className="content-section">
          <h2 className="section-title">Just remember</h2>
          <div className="table-container">
            <table className="info-table">
              <thead>
                <tr>
                  <th>Term</th>
                  <th>Case</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Founder Equity</td>
                  <td>The ownership stake of the startup's original founders.</td>
                </tr>
                <tr>
                  <td>Dilution</td>
                  <td>The decrease in existing shareholders' ownership when new shares are issued.</td>
                </tr>
                <tr>
                  <td>Stock Options (ESOPs)</td>
                  <td>Shares reserved for employees as part of compensation.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EquityCapTable;