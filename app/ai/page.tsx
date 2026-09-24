export default function AIPage() {
  return (
    <main className="page-shell">
      <div className="container">
        <div className="page-card">
          <h1>AI automation</h1>
          <p>Configure your business workflows and AI rules for message routing, lead scoring, and follow-up actions.</p>

          <div className="form-grid">
            <div>
              <label htmlFor="prompt">AI prompt</label>
              <textarea id="prompt" defaultValue="Respond in Arabic, French, or English depending on the customer language. Ask for a name, phone number, and service need. Mark the lead as hot if the user requests a price or immediate booking." />
            </div>
            <div>
              <label htmlFor="workflow">Workflow</label>
              <select id="workflow">
                <option>Lead qualification</option>
                <option>Booking request</option>
                <option>Customer support</option>
                <option>Sales follow-up</option>
              </select>
            </div>
            <button type="button" className="btn btn-primary">
              Save AI setup
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
