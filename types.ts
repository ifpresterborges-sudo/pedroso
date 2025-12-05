import React from 'react';

export interface PlanPillar {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  description: string;
  actionItems: string[];
  tips?: string;
}

export interface WeeklyScheduleItem {
  day: string;
  focus: string;
  postIdea: string;
  captionIdea: string;
}

export interface AdCampaign {
  title: string;
  objective: string;
  target: string;
  creative: string;
  callToAction: string;
}