import FlowSummary from './FlowSummary';

const FlowList = ({ flows }) => {
  const flowList = flows.map((flow) => {
    const { code, name, streamFlow, gageHeight } = flow;

    return <FlowSummary
      key={ code }
      name={ name}
      streamFlowVal={ streamFlow.value }
      streamFlowDesc={ streamFlow.description }
      gageHeightVal={ gageHeight.value }
      gageHeightDesc={ gageHeight.description }
    />
  })

  return (
    <ul className="">
      { flowList }
    </ul>
  )
}

export default FlowList
