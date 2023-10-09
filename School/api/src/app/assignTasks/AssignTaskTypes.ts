export type AssignTaskType = {
  id?: number;
  std_id: number;
  task_id: number;
  school_id: number;
  description?: string;
  assigned_at?: Date;
  status?: boolean;
};
