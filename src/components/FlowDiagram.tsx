import { useCallback, useMemo } from "react";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Node,
  MarkerType,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { PipelineNode, PipelineNodeData } from "./CustomNodes";
import { awsPipelineData } from "@/src/data/aws-services";
import { gcpPipelineData } from "@/src/data/gcp-services";

const nodeTypes = {
  pipelineNode: PipelineNode,
};

const defaultEdgeOptions = {
  type: "smoothstep",
  animated: true,
  style: { stroke: "#94a3b8", strokeWidth: 2 },
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: "#94a3b8",
  },
};

const getInitialEdges = (): Edge[] => [
  {
    id: "e-net-src",
    source: "networking",
    target: "sources",
    ...defaultEdgeOptions,
    animated: false,
  },
  {
    id: "e-iac-src",
    source: "iac",
    target: "sources",
    ...defaultEdgeOptions,
    animated: false,
  },
  {
    id: "e-src-ing",
    source: "sources",
    target: "ingestion",
    ...defaultEdgeOptions,
  },
  {
    id: "e-ing-stg",
    source: "ingestion",
    target: "storage",
    ...defaultEdgeOptions,
  },

  {
    id: "e-stg-proc",
    source: "storage",
    target: "processing",
    ...defaultEdgeOptions,
  },
  {
    id: "e-stg-ana",
    source: "storage",
    target: "analytics",
    ...defaultEdgeOptions,
  },

  {
    id: "e-proc-stg",
    source: "processing",
    target: "storage",
    ...defaultEdgeOptions,
    animated: false,
    style: { stroke: "#cbd5e1", strokeWidth: 2, strokeDasharray: "5 5" },
  },

  {
    id: "e-proc-ml",
    source: "processing",
    target: "ml",
    ...defaultEdgeOptions,
  },
  { id: "e-stg-ml", source: "storage", target: "ml", ...defaultEdgeOptions },

  {
    id: "e-ana-genai",
    source: "analytics",
    target: "genAi",
    ...defaultEdgeOptions,
  },
  {
    id: "e-stg-genai",
    source: "storage",
    target: "genAi",
    ...defaultEdgeOptions,
  },

  {
    id: "e-ml-del",
    source: "ml",
    target: "delivery",
    ...defaultEdgeOptions,
  },
  {
    id: "e-genai-del",
    source: "genAi",
    target: "delivery",
    ...defaultEdgeOptions,
  },
  {
    id: "e-ana-del",
    source: "analytics",
    target: "delivery",
    ...defaultEdgeOptions,
  },

  {
    id: "e-sec-stg",
    source: "security",
    target: "storage",
    ...defaultEdgeOptions,
    animated: false,
    style: { stroke: "#f87171", strokeWidth: 1, strokeDasharray: "5 5" },
  },
];

export default function FlowDiagram({ provider = "aws" }: { provider?: "aws" | "gcp" }) {
  const pipelineData = provider === "aws" ? awsPipelineData : gcpPipelineData;

  const initialNodes: Node<PipelineNodeData>[] = useMemo(() => [
    {
      id: "networking",
      type: "pipelineNode",
      position: { x: 50, y: 50 },
      data: {
        ...pipelineData.networking,
        theme: "cyan",
      },
    },
    {
      id: "iac",
      type: "pipelineNode",
      position: { x: 50, y: 400 },
      data: {
        ...pipelineData.iac,
        theme: "orange",
      },
    },
    {
      id: "sources",
      type: "pipelineNode",
      position: { x: 450, y: 200 },
      data: {
        ...pipelineData.sources,
        theme: "slate",
      },
    },
    {
      id: "ingestion",
      type: "pipelineNode",
      position: { x: 850, y: 200 },
      data: {
        ...pipelineData.ingestion,
        theme: "blue",
      },
    },
    {
      id: "storage",
      type: "pipelineNode",
      position: { x: 1250, y: 200 },
      data: {
        ...pipelineData.storage,
        theme: "emerald",
      },
    },
    {
      id: "security",
      type: "pipelineNode",
      position: { x: 1250, y: 600 },
      data: {
        ...pipelineData.security,
        theme: "red",
      },
    },
    {
      id: "processing",
      type: "pipelineNode",
      position: { x: 1650, y: 50 },
      data: {
        ...pipelineData.processing,
        theme: "amber",
      },
    },
    {
      id: "analytics",
      type: "pipelineNode",
      position: { x: 1650, y: 400 },
      data: {
        ...pipelineData.analytics,
        theme: "purple",
      },
    },
    {
      id: "ml",
      type: "pipelineNode",
      position: { x: 2050, y: 50 },
      data: {
        ...pipelineData.machineLearning,
        theme: "rose",
      },
    },
    {
      id: "genAi",
      type: "pipelineNode",
      position: { x: 2050, y: 400 },
      data: {
        ...pipelineData.genAi,
        theme: "fuchsia",
      },
    },
    {
      id: "delivery",
      type: "pipelineNode",
      position: { x: 2450, y: 200 },
      data: {
        ...pipelineData.delivery,
        theme: "indigo",
      },
    },
  ], [pipelineData]);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(getInitialEdges());

  const onConnect = useCallback(
    (params: Connection) =>
      setEdges((eds) => addEdge({ ...params, ...defaultEdgeOptions }, eds)),
    [setEdges],
  );

  return (
    <div className="w-full h-full bg-slate-50/50">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        attributionPosition="bottom-right"
        minZoom={0.1}
      >
        <Controls />
        <MiniMap
          nodeColor={(node) => {
            if (node.id === "networking") return "#06b6d4";
            if (node.id === "iac") return "#f97316";
            if (node.id === "sources") return "#64748b";
            if (node.id === "ingestion") return "#3b82f6";
            if (node.id === "storage") return "#10b981";
            if (node.id === "processing") return "#f59e0b";
            if (node.id === "analytics") return "#a855f7";
            if (node.id === "ml") return "#f43f5e";
            if (node.id === "genAi") return "#d946ef";
            if (node.id === "delivery") return "#6366f1";
            if (node.id === "security") return "#ef4444";
            return "#eee";
          }}
          maskColor="rgba(248, 250, 252, 0.7)"
        />
        <Background color="#cbd5e1" gap={16} size={1} />
      </ReactFlow>
    </div>
  );
}
