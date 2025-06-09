<<<<<<< HEAD
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Search, User } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import ContactList from "@/components/ContactList";
import { Contact } from "@/types/contact";

const Index = () => {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: "1",
      name: "John Doe",
      phone: "+1 (555) 123-4567",
      email: "john.doe@email.com",
      address: "123 Main St, New York, NY 10001",
      notes: "CEO at Tech Company",
    },
    {
      id: "2",
      name: "Jane Smith",
      phone: "+1 (555) 987-6543",
      email: "jane.smith@email.com",
      address: "456 Oak Ave, Los Angeles, CA 90210",
      notes: "Designer and friend",
    },
    {
      id: "3",
      name: "Mike Johnson",
      phone: "+1 (555) 456-7890",
      email: "mike.j@email.com",
      address: "789 Pine St, Chicago, IL 60601",
      notes: "Business partner",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingContact, setEditingContact] = useState<Contact | null>(null);

  // Hydrate contacts from localStorage on first load
  useEffect(() => {
    try {
      const stored = localStorage.getItem("contacts");
      if (stored) {
        const parsed: Contact[] = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setContacts(parsed);
        }
      }
    } catch (error) {
      console.error("Failed to load contacts from localStorage", error);
    }
  }, []);

  // Persist contacts to localStorage on change
  useEffect(() => {
    try {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    } catch (error) {
      console.error("Failed to save contacts to localStorage", error);
    }
  }, [contacts]);

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.phone.includes(searchTerm)
  );

  const handleAddContact = (contactData: Omit<Contact, "id">) => {
    const newContact: Contact = {
      ...contactData,
      id: Date.now().toString(),
    };
    setContacts([...contacts, newContact]);
    setShowForm(false);
  };

  const handleEditContact = (contactData: Omit<Contact, "id">) => {
    if (editingContact) {
      setContacts(
        contacts.map((contact) =>
          contact.id === editingContact.id
            ? { ...contactData, id: editingContact.id }
            : contact
        )
      );
      setEditingContact(null);
      setShowForm(false);
    }
  };

  const handleDeleteContact = (id: string) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const startEdit = (contact: Contact) => {
    setEditingContact(contact);
    setShowForm(true);
  };

  const cancelForm = () => {
    setShowForm(false);
    setEditingContact(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center">
                <User className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Contact Manager</h1>
                <p className="text-muted-foreground">
                  Manage your personal and professional contacts
                </p>
              </div>
            </div>
            <Button onClick={() => setShowForm(true)} className="gap-2">
              <Plus className="w-4 h-4" />
              Add Contact
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-1">
            {showForm ? (
              <ContactForm
                contact={editingContact}
                onSubmit={editingContact ? handleEditContact : handleAddContact}
                onCancel={cancelForm}
              />
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="w-5 h-5" />
                    Search Contacts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="search">
                        Search by name, email, or phone
                      </Label>
                      <Input
                        id="search"
                        placeholder="Type to search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="mt-2"
                      />
                    </div>
                    <div className="pt-4 border-t">
                      <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{contacts.length} Total</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Search className="w-4 h-4" />
                          <span>{filteredContacts.length} Found</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Contact List */}
          <div className="lg:col-span-2">
            <ContactList
              contacts={filteredContacts}
              onEdit={startEdit}
              onDelete={handleDeleteContact}
            />
          </div>
        </div>
=======
// Update this page (the content is just a fallback if you fail to update the page)

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Blank App</h1>
        <p className="text-xl text-muted-foreground">Start building your amazing project here!</p>
>>>>>>> 6c0a78c (Use tech stack vite_react_shadcn_ts)
      </div>
    </div>
  );
};

export default Index;
