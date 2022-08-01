/*
 * @Author: tohsaka888
 * @Date: 2022-08-01 10:27:40
 * @LastEditors: tohsaka888
 * @LastEditTime: 2022-08-01 10:41:12
 * @Description: 请填写简介
 */
import data from '@/assets/flare-2.json'
import * as d3 from 'd3'

export const formatData = () => {
  const root = d3.hierarchy(data);
  const links = root.links();
  const nodes = root.descendants();

  return {
    nodes,
    links,
  }
}
