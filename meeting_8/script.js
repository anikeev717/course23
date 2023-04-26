import { Comment } from "./comment.js";
import { CommentsPage } from "./commentsPage.js";

const body = document.querySelector("body");
const comment = new Comment(body, {
  title: "End of Life for Azure Notebooks",
  content:
    "Ironically, Windows Phones clients never fully supported Microsoft's enterprise line -- specifically, the 'Outlook' app did not support shared calendards or even multiple calendars associated with one account. Digging into the application revealed that it re-used an open-source syncing library instead of being a Microsoft-built implementation! Exchange support was the bulk of the appeal for the platform for me, and lack thereof is the reason I moved on to Android, where I had real support for a more full-featured toolset.",
  avatarUrl: "./assets/img/img.png",
  author: "John Doe",
  id: 1,
});
comment.render();
const commentsPage = new CommentsPage(body);
commentsPage.fetchData();
