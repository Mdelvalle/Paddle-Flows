const FlowSummary = ({ name, streamFlowDesc, streamFlowVal, gageHeightDesc, gageHeightVal }) => {
  return (
    <li>
      <p>{ name }</p>
      <p>{ streamFlowDesc } { streamFlowVal }</p>
      <p>{ gageHeightDesc } { gageHeightVal }</p>
    </li>
  )
}

export default FlowSummary
