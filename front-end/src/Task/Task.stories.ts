import type { Meta, StoryObj } from "@storybook/react-vite";
import Task from ".";
import { fn } from "storybook/test";

const meta = {
  title: "Task",
  component: Task,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  args: {
    setTasks: fn(),
    task: {
      title: "Estudar StoryBook",
      _id: "1",
      done: false,
    },
  },
} satisfies Meta<typeof Task>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Done: Story = {
  args: {
    task: {
      ...meta.args.task,
      done: true,
    },
  },
};
