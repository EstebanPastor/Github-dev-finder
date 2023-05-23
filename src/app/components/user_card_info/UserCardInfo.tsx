import BuildingIcon from "../icons/BuildingIcon";
import GitHubIcon from "../icons/GitHubIcon";
import LinkIcon from "../icons/LinkIcon";
import LocationIcon from "../icons/LocationIcon";
import TwitterIcon from "../icons/TwitterIcon";
import { User } from "../../../interfaces/user";
import { validateURL } from "@/utils/ValidateUrl";
import Image from "next/image";
interface Props {
  user: User;
}

function UserCardInfo({ user }: Props) {
  return (
    <>
      <article className="grid-areas rounded-xl bg-white p-5 shadow-md dark:bg-blue-900 dark:text-white dark:shadow-none">
        <div className=" section-logo mr-3 grid h-24 w-24 place-content-center overflow-hidden rounded-full bg-gray-200 p-1 lg:mx-auto">
          <Image
            src={user.avatar_url}
            width={96}
            height={96}
            alt={`profile img username ${user.name}`}
            className="rounded-full"
          />

          {/* <GitHubIcon className="relative top-2 h-full w-full" /> */}
        </div>
        <div className="section-title">
          <h2 className="text-3xl font-bold">{user.name}</h2>
          <p>@{user.login}</p>
        </div>
        <p className="section-date lg:text-left">
          {new Date(user?.created_at).toLocaleDateString("es", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <p className="section-description mt-8 leading-loose">
          {user.bio || "No user bio"}
        </p>
        <div className=" section-number mt-4 flex justify-around rounded-2xl bg-blue-50 p-8 text-center text-blue-950 dark:bg-blue-950 dark:text-white">
          <article>
            <p>Repositories</p>
            <p className="text-xl font-bold">{user.public_repos}</p>
          </article>
          <article>
            <p>Followers</p>
            <p className="text-xl font-bold">{user.followers}</p>
          </article>
          <article>
            <p>Following</p>
            <p className="text-xl font-bold">{user.following}</p>
          </article>
        </div>
        <div className="section-social mt-4 space-y-3 md:grid md:grid-cols-2">
          <article className="flex space-x-2">
            <i>
              <LocationIcon
                className="h-full w-full dark:fill-white fill-blue-950"
                width={"1rem"}
              />
            </i>
            <span>{user.location || "No location"}</span>
          </article>
          <article className="flex space-x-2">
            <i>
              <LinkIcon className="h-full w-full dark:fill-white fill-blue-950" width={"1rem"} />
            </i>
            <a href={validateURL(user.blog)} className="truncate">
              {user.blog || "User has no blog"}
            </a>
          </article>
          <article className="flex space-x-2">
            <i>
              <TwitterIcon
                className="h-full w-full dark:fill-white fill-blue-950"
                width={"1rem"}
              />
            </i>
            <a href={`https://twitter.com/${user.twitter_username}`}>
              {user.twitter_username || "This user has no twitter"}
            </a>
          </article>
          <article className="flex space-x-2">
            <i>
              <BuildingIcon
                className="h-full w-full dark:fill-white fill-blue-950"
                width={"1rem"}
              />
            </i>
            <a href="#">{user?.company || "No company"}</a>
          </article>
        </div>
      </article>
    </>
  );
}

export default UserCardInfo;
