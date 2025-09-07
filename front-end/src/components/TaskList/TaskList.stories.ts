import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import TaskList from ".";

const meta = {
  title: "Components/TaskList",
  component: TaskList,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  args: {
    setTasks: fn(),
  },
} satisfies Meta<typeof TaskList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tasks: [
      {
        _id: "1",
        title: "Estudar Storybook",
        done: false,
      },
      {
        _id: "2",
        title: "Estudar React",
        done: false,
      },
      {
        _id: "3",
        title: "Estudar testes",
        done: true,
      },
    ],
  },
};

export const Empty: Story = {
  args: {
    tasks: [],
  },
};
