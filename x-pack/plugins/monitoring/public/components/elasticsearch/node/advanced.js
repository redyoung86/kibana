/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import React from 'react';
import {
  EuiPage,
  EuiPageContent,
  EuiPageBody,
  EuiSpacer,
  EuiFlexGrid,
  EuiFlexItem,
} from '@elastic/eui';
import { NodeDetailStatus } from '../node_detail_status';
import { MonitoringTimeseriesContainer } from '../../chart';

export const AdvancedNode = ({
  nodeSummary,
  metrics,
  ...props
}) => {
  const metricsToShow = [
    metrics.node_gc,
    metrics.node_gc_time,
    metrics.node_jvm_mem,
    metrics.node_cpu_utilization,
    metrics.node_index_1,
    metrics.node_index_2,
    metrics.node_index_3,
    metrics.node_index_4,
    metrics.node_index_time,
    metrics.node_request_total,
    metrics.node_index_threads,
    metrics.node_read_threads,
    metrics.node_cgroup_cpu,
    metrics.node_cgroup_stats,
    metrics.node_latency,
  ];

  return (
    <EuiPage>
      <EuiPageBody>
        <EuiPageContent>
          <NodeDetailStatus stats={nodeSummary} />
          <EuiSpacer size="m"/>
          <EuiFlexGrid columns={2} gutterSize="none">
            {metricsToShow.map((metric, index) => (
              <EuiFlexItem key={index} style={{ width: '50%' }}>
                <MonitoringTimeseriesContainer
                  series={metric}
                  {...props}
                />
                <EuiSpacer size="m"/>
              </EuiFlexItem>
            ))}
          </EuiFlexGrid>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  );
};
