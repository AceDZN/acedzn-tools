"use client";

import React from "react";
import { SimulationBlock as SimulationBlockType } from "@/lib/types";
import { RenderBlockFn } from "../BlockRenderer";
import {
  VolumeSimulation,
  DisplacementSimulation,
  GravitySimulation,
  FloatingExperiment,
  CompressionSimulation,
  DiffusionSimulation,
  ParticleModelSimulation,
  SurfaceTensionSimulation,
  PhaseTransitionSimulation,
  DensityCalculator,
  MeniscusIllustration
} from "@/components/simulations";
import { PhaseGraph } from "@/components/PhaseGraph";

// Registry of available simulations
const SIMULATION_REGISTRY: Record<string, React.ComponentType> = {
  VolumeSimulation,
  DisplacementSimulation,
  GravitySimulation,
  FloatingExperiment,
  CompressionSimulation,
  DiffusionSimulation,
  ParticleModelSimulation,
  SurfaceTensionSimulation,
  PhaseTransitionSimulation,
  DensityCalculator,
  PhaseGraph,
  MeniscusIllustration
};

interface Props {
  block: SimulationBlockType;
  renderBlock: RenderBlockFn;
}

export const SimulationBlock = ({ block }: Props) => {
  const Component = SIMULATION_REGISTRY[block.componentName];

  if (!Component) {
    return (
      <div className="p-4 bg-red-100 text-red-600 rounded-xl">
        Simulation &quot;{block.componentName}&quot; not found
      </div>
    );
  }

  return <Component />;
};

