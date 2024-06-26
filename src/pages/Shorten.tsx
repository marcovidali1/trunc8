import { useShortenedLinks } from "../features/shorten/useShortenedLinks";

import ShortenForm from "../features/shorten/ShortenForm";
import ShortenTitle from "../features/shorten/ShortenTitle";
import FullPageCentered from "../ui/FullPageCentered";
import FullPageSpinner from "../ui/FullPageSpinner";

function Shorten() {
    const { isLoading } = useShortenedLinks();

    if (isLoading) return <FullPageSpinner />;

    return (
        <FullPageCentered>
            <div className="flex w-96 flex-col gap-4">
                <ShortenTitle />
                <ShortenForm />
            </div>
        </FullPageCentered>
    );
}

export default Shorten;
