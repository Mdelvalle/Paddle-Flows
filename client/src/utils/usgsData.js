const usgsData = (response) => {
  const rawSiteData = response && response.data.value.timeSeries;
  return rawSiteData;
}

export default usgsData;