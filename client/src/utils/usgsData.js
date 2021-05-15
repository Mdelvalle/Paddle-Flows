const usgsData = (response) => {
  const { timeSeries } = response.data.value;

  // Sites that have current flow and height data
  const sites = timeSeries.filter((site) => {
    const containsStreamFlow = siteIncludes(site, 'Streamflow');
    const containsGageHeight = siteIncludes(site, 'Gage');

    return containsStreamFlow || containsGageHeight;
  })
  
  // USGS sites may be split up into separate time series, so
  // we merge sites with the same site code into one object
  let siteCache = {};
  for (const site of sites) {
    const code = siteCode(site);
    const name = siteName(site);
    const variable = siteVariable(site);

    if (!siteCache[code]) {
      siteCache[code] = {
        code,
        name,
        streamFlow: variable,
        gageHeight: variable
      }
    } else {
      if (siteIncludes(site, 'Streamflow')) {
        siteCache[code].streamFlow = variable;
      } else if (siteIncludes(site, 'Gage')) {
        siteCache[code].gageHeight = variable;
      }
    }
  }

  return Object.values(siteCache);
}

// Identify what type of data exists in a
// time series by searching for key words
const siteIncludes = (site, text) => {
  return site.variable.variableName.includes(text);
}

// Unique site identifier
const siteCode = (site) => {
  return site.sourceInfo.siteCode[0].value;
}

const siteName = (site) => {
  return site.sourceInfo.siteName;
}

// Retrieves variable data for a site:
// variables range from stream flow to gage height
const siteVariable = (site) => {
  const { values, variable } = site;
  const value = values[0].value[0].value;
  const description = variable.variableDescription;

  return { value, description };
}

export default usgsData;