/*
 * @Author: tohsaka888
 * @Date: 2022-08-01 10:06:03
 * @LastEditors: tohsaka888
 * @LastEditTime: 2022-08-01 11:09:23
 * @Description: 请填写简
 */

import * as d3 from 'd3'
import data from '@/assets/flare-2.json'

export const drawCanvas = (nodes: any[], links: any[]) => {

  const simulation = d3.forceSimulation(nodes as d3.SimulationNodeDatum[])
    .force("link", d3.forceLink(links as d3.SimulationLinkDatum<d3.SimulationNodeDatum>[]).id((d: any) => d.id).distance(0).strength(1))
    .force("charge", d3.forceManyBody().strength(-50))
    .force("x", d3.forceX())
    .force("y", d3.forceY());

  // node.append("title")
  //   .text(d => d.data.name);

  simulation.on("tick", () => {
    d3.select('#link-area')
      .selectAll('line')
      .data(links)
      .attr("x1", (d: any) => d.source.x)
      .attr("y1", (d: any) => d.source.y)
      .attr("x2", (d: any) => d.target.x)
      .attr("y2", (d: any) => d.target.y);

    d3.select('#node-area')
      .selectAll('circle')
      .data(nodes)
      .attr("cx", (d: any) => d.x)
      .attr("cy", (d: any) => d.y);
  });
}