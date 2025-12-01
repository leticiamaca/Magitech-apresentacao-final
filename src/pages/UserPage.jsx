import { UserNavbar, UserHero, UserProgress, UserCourses } from "../components/user";
import Footer from "../components/default/Footer";

export default function UserPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0c1c18] via-[#000] to-[#000]">
            {/* Navigation */}
            <UserNavbar />
            
            {/* Hero Section */}
            <UserHero />
            
            {/* Progress Section */}
            <UserProgress />
            
            {/* Courses Section */}
            <UserCourses />

            <Footer />
        </div>
    );
}
