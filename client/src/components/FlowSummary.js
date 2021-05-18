const FlowSummary = ({ name, streamFlowDesc, streamFlowVal, gageHeightDesc, gageHeightVal }) => {
  return (
    <li className="box flow-summary">
      <p className="flow-summary-name">{ name }</p>
      <div className="flow-summary-data">
        <p>Flow: { streamFlowVal } ft&sup3;/s</p>
        <p>Depth: { gageHeightVal } ft</p>
      </div>
    </li>
  )
}

export default FlowSummary
