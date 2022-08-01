/*
 * @Author: tohsaka888
 * @Date: 2022-07-28 16:09:46
 * @LastEditors: tohsaka888
 * @LastEditTime: 2022-08-01 11:12:44
 * @Description: 请填写简介
 */

import useScreenSize from '@/hooks/useScreenSize'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { drawCanvas } from './Canvas/drawCanvas'
import { formatData } from './Canvas/formatData'
import style from './index.module.css'

function Container() {

  const { width, height } = useScreenSize()
  const [graphData, setGraphData] = useState<{ nodes: any[]; links: any[] }>({ nodes: [], links: [] })

  useEffect(() => {
    setGraphData(formatData())
  }, [])

  useEffect(() => {
    drawCanvas(graphData.nodes, graphData.links)
  }, [graphData.nodes.length, graphData.links.length])

  return (
    <div className={style['container']} style={{ width: width, height: height }}>
      <svg id='svg' style={{ width: '100%', height: '100%' }}>
        <g transform='translate(600, 300)'>
          <g id='link-area'>
            {graphData.links.map((link, index) => {
              return (
                <line key={index} stroke='#999' strokeOpacity={0.6} />
              )
            })}
          </g>
          <g id='node-area'>
            {graphData.nodes.map((node, index) => {
              return (
                <circle
                  key={index}
                  fill={node.children ? '#fff' : '#000'}
                  stroke={node.children ? '#000' : '#fff'}
                  r={3.5}
                />
              )
            })}
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Container
