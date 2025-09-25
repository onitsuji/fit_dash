import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Form } from "./ui/form";

export function WeightEntryForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Log Your Weight</CardTitle>
        <CardDescription>
          Enter your weight in your preferred unit.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form>
          <form></form>
        </Form>
      </CardContent>
    </Card>
  );
}
