import Article from 'components-helpdev-storyblok/components/Article.vue';
import ArticleTeaser from 'components-helpdev-storyblok/components/ArticleTeaser.vue';
import Feature from 'components-helpdev-storyblok/components/Feature.vue';
import FeatureContainer from 'components-helpdev-storyblok/components/feature/FeatureContainer.vue';
import FeatureItem from 'components-helpdev-storyblok/components/feature/FeatureItem.vue';
import FeaturedArticles from 'components-helpdev-storyblok/components/FeaturedArticles.vue';
import Grid from 'components-helpdev-storyblok/components/Grid.vue';
import Page from 'components-helpdev-storyblok/components/Page.vue';
import PageForm from 'components-helpdev-storyblok/components/page/PageForm.vue';
import PageHero from 'components-helpdev-storyblok/components/page/PageHero.vue';
import PageImages from 'components-helpdev-storyblok/components/page/PageImages.vue';
import PageText from 'components-helpdev-storyblok/components/page/PageText.vue';
import PageTitle from 'components-helpdev-storyblok/components/page/PageTitle.vue';
import PageVideo from 'components-helpdev-storyblok/components/page/PageVideo.vue';
import Project from 'components-helpdev-storyblok/components/Project.vue';
import SocialIcon from 'components-helpdev-storyblok/components/shared/SocialIcon.vue';
import TeamContainer from 'components-helpdev-storyblok/components/team/TeamContainer.vue';
import TeamMember from 'components-helpdev-storyblok/components/team/TeamMember.vue';
import Teaser from 'components-helpdev-storyblok/components/Teaser.vue';
import Vue from 'vue';

Vue.component('page', Page);
Vue.component('content-project', Project);
Vue.component('content-article', Article);
Vue.component('teaser', Teaser);
Vue.component('grid', Grid);
Vue.component('feature', Feature);
Vue.component('featured-articles', FeaturedArticles);
Vue.component('article-teaser', ArticleTeaser);
Vue.component('page-title', PageTitle);
Vue.component('page-hero', PageHero);
Vue.component('page-form', PageForm);
Vue.component('page-text', PageText);
Vue.component('page-images', PageImages);
Vue.component('page-video', PageVideo);
Vue.component('team-container', TeamContainer);
Vue.component('team-member', TeamMember);
Vue.component('feature-container', FeatureContainer);
Vue.component('feature-item', FeatureItem);
Vue.component('social-icon', SocialIcon);
