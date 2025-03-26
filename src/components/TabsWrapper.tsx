import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Github,
  GitPullRequest,
  MessageSquare,
} from "lucide-react";

// Komponen React untuk Tabs
const ContributionTabs = () => {
  return (
    <Tabs defaultValue="code" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="code">Kode</TabsTrigger>
        <TabsTrigger value="documentation">Dokumentasi</TabsTrigger>
        <TabsTrigger value="community">Komunitas</TabsTrigger>
      </TabsList>
      
      <TabsContent value="code" className="mt-6">
        <Card className="shadow-none">
          <CardHeader>
            <CardTitle>Kontribusi Kode</CardTitle>
            <CardDescription>
              Bantu pengembangan proyek dengan kontribusi kode
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-500">
              Berikut adalah langkah-langkah untuk berkontribusi kode pada
              proyek kami:
            </p>
            <ol className="list-decimal pl-5 space-y-2 text-gray-500">
              <li>Fork repositori proyek dari GitHub kami</li>
              <li>Clone repositori ke komputer lokal Anda</li>
              <li>
                Buat branch baru untuk fitur atau perbaikan yang ingin
                Anda kerjakan
              </li>
              <li>
                Kerjakan perubahan dan commit dengan pesan yang jelas
              </li>
              <li>Push perubahan ke repositori fork Anda</li>
              <li>Buat Pull Request ke repositori utama</li>
            </ol>
            <div className="pt-4">
              <Button asChild>
                <a
                  href="https://github.com/papua-opensource"
                  className="flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  <span>Lihat Repositori GitHub</span>
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="documentation" className="mt-6">
        <Card className="shadow-none">
          <CardHeader>
            <CardTitle>Kontribusi Dokumentasi</CardTitle>
            <CardDescription>
              Bantu memperbaiki dan melengkapi dokumentasi proyek
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-500">
              Dokumentasi yang baik sangat penting untuk proyek open
              source. Anda dapat berkontribusi dengan:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-500">
              <li>Memperbaiki kesalahan penulisan atau tata bahasa</li>
              <li>Menambahkan contoh penggunaan</li>
              <li>Membuat tutorial atau panduan penggunaan</li>
              <li>Menerjemahkan dokumentasi ke bahasa daerah Papua</li>
              <li>
                Membuat diagram atau ilustrasi yang membantu pemahaman
              </li>
            </ul>
            <div className="pt-4">
              <Button asChild>
                <a
                  href="https://github.com/papua-opensource"
                  className="flex items-center gap-2"
                >
                  <GitPullRequest className="h-4 w-4" />
                  <span>Mulai Berkontribusi</span>
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="community" className="mt-6">
        <Card className="shadow-none">
          <CardHeader>
            <CardTitle>Kontribusi Komunitas</CardTitle>
            <CardDescription>
              Bantu membangun dan memperkuat komunitas kami
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-500">
              Anda juga dapat berkontribusi dengan membantu membangun
              komunitas:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-500">
              <li>Menjawab pertanyaan di forum diskusi</li>
              <li>Melaporkan bug atau masalah yang Anda temukan</li>
              <li>Mengusulkan fitur atau perbaikan baru</li>
              <li>Membantu menguji versi beta dari proyek</li>
              <li>Mempromosikan proyek di media sosial</li>
              <li>
                Mengorganisir atau berpartisipasi dalam meetup komunitas
              </li>
            </ul>
            <div className="pt-4">
              <Button asChild>
                <a href="/kontak" className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  <span>Hubungi Kami</span>
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default ContributionTabs;