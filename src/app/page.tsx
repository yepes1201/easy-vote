import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormDivider } from "@/components/layout/form";

export default function Home() {
  return (
    <Tabs defaultValue="edit" className="max-w-[400px] min-h-[288px] w-full">
      <TabsList className="w-full">
        <TabsTrigger className="flex-1" value="edit">
          Edit
        </TabsTrigger>
        <TabsTrigger className="flex-1" value="create">
          Create
        </TabsTrigger>
      </TabsList>
      <TabsContent value="edit">
        <Form>
          <Input placeholder="Poll Key" />
          <Input placeholder="Password" />
          <Button variant="default">Edit</Button>
          <FormDivider>
            <span className="text-xs font-semibold">OR</span>
          </FormDivider>
          <Button variant="outline">Create</Button>
        </Form>
      </TabsContent>
      <TabsContent value="create">
        <Form>
          <Input placeholder="Password" />
          <Button variant="default">Create</Button>
        </Form>
      </TabsContent>
    </Tabs>
  );
}
