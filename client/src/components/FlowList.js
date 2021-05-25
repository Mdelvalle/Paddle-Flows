import FlowSummary from './FlowSummary';


const FlowList = ({ flows, len }) => {
  const flowList = flows.map((flow) => {
    const { code, name, streamFlow, gageHeight, temp, wind, icon, type } = flow;

    return <FlowSummary
      key={ code }
      name={ name}
      streamFlowVal={ streamFlow.value }
      gageHeightVal={ gageHeight.value }
      temp={ temp }
      wind={ wind }
      icon={ icon }
      type={ type }
    />
  })

  return (
    <div>
      <ul>
        { flowList }
      </ul>

      <p className="flow-list-len">
        Displaying <span className="flow-list-num">{ len }</span> results.
      </p>
    </div>
  )
}

export default FlowList
