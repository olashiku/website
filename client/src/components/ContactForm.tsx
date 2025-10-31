import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

type ContactFormValues = z.infer<typeof insertContactSubmissionSchema>;

export default function ContactForm() {
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      serviceInterest: "",
      location: "",
      productType: "",
      documentStatus: "",
      transactionType: "",
      additionalServices: "",
      message: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return await response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    submitMutation.mutate(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} data-testid="input-name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john@example.com" {...field} data-testid="input-email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="(555) 123-4567" {...field} data-testid="input-phone" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="serviceInterest"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service Interest</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger data-testid="select-service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="building-developing">Building and Developing</SelectItem>
                    <SelectItem value="renovation-construction">Renovation & Construction Projects</SelectItem>
                    <SelectItem value="estate-management">Estate Management</SelectItem>
                    <SelectItem value="land-documents">Sourcing and Land Documents</SelectItem>
                    <SelectItem value="equipment-tools">Equipment and Tools</SelectItem>
                    <SelectItem value="land-scale">Land Scale</SelectItem>
                    <SelectItem value="land-environment">Land & Environment Management</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Project Details Section */}
        <div className="border-t pt-6 mt-6">
          <h3 className="text-lg font-semibold mb-4">Project Details</h3>
          
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="mb-6">
                <FormLabel>Your Location</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Lagos, Abuja, Port Harcourt" {...field} data-testid="input-location" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="productType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Needed</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger data-testid="select-product">
                        <SelectValue placeholder="Select product type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="house">House 🏠</SelectItem>
                      <SelectItem value="land">Land</SelectItem>
                      <SelectItem value="commercial">Commercial Property</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="documentStatus"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Document Status</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger data-testid="select-document">
                        <SelectValue placeholder="Select document status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="with-documents">With Documents</SelectItem>
                      <SelectItem value="without-documents">Without Documents</SelectItem>
                      <SelectItem value="need-assistance">Need Assistance</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <FormField
              control={form.control}
              name="transactionType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Transaction Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger data-testid="select-transaction">
                        <SelectValue placeholder="Select transaction type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="rent">Rent</SelectItem>
                      <SelectItem value="outright-sale">Outright Sale</SelectItem>
                      <SelectItem value="gv">Government Allocation (GV)</SelectItem>
                      <SelectItem value="lease">Lease</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="additionalServices"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Services</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger data-testid="select-additional">
                        <SelectValue placeholder="Select additional services" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="property-management">Property Management</SelectItem>
                      <SelectItem value="development">Development</SelectItem>
                      <SelectItem value="surveying-analysis">Surveying Analysis</SelectItem>
                      <SelectItem value="documentation">Documentation</SelectItem>
                      <SelectItem value="all-services">All Services 🔌</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Information</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us more about your project requirements..."
                  className="min-h-[120px]"
                  {...field}
                  data-testid="input-message"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="bg-accent/30 p-4 rounded-lg">
          <p className="text-sm text-muted-foreground text-center">
            🏡 We assure quality services for all your real estate needs
          </p>
        </div>

        <Button type="submit" size="lg" className="w-full" disabled={submitMutation.isPending} data-testid="button-submit">
          {submitMutation.isPending ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
}
