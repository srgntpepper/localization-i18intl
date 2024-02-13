import { useTranslations } from "next-intl";
import { Link } from "../../navigation";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <div>
      <div>
        <Link href="/" locale="en">
          In English
        </Link>
        |{" "}
        <Link href="/" locale="de">
          In German
        </Link>
        <br />
        <br />
      </div>
      <div>
        <p>{t("title")}</p>
      </div>
    </div>
  );
}
