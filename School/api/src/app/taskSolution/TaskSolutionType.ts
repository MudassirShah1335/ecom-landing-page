export type TaskSolutionType = {
  id?: number;
  std_id: number;
  ass_tsk_id: number;
  title: string;
  description: string;
  pdf?: string[] | string | undefined;
  image?: string[] | string | undefined;
  video?: string[] | string | undefined;
  evaluation?: string;
  solved_at?: Date;
  status?: "PENDING" | "APPROVED" | "REJECTED";
};
