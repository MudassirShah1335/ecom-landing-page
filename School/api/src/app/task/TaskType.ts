export type TaskType = {
  id?: number;
  created_by?: number;
  school_id: number | null;
  class_id: number;
  title: string;
  description: string;
  status?: boolean;
};
