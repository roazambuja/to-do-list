import type { Meta, StoryObj } from "@storybook/react-vite";
import TaskForm from ".";
import { fn } from "storybook/test";

const meta = {
  title: "Components/TaskForm",
  component: TaskForm,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  args: {
    setTasks: fn(),
  },
} satisfies Meta<typeof TaskForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
