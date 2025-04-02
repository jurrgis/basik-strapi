import type { Schema, Struct } from '@strapi/strapi';

export interface ContentCustomBlocks extends Struct.ComponentSchema {
  collectionName: 'components_content_custom_blocks';
  info: {
    description: '';
    displayName: 'CustomBlocks';
    icon: 'book';
  };
  attributes: {
    block: Schema.Attribute.RichText;
    title: Schema.Attribute.String & Schema.Attribute.DefaultTo<'block_1'>;
  };
}

export interface ContentCustomFields extends Struct.ComponentSchema {
  collectionName: 'components_content_custom_fields';
  info: {
    displayName: 'CustomFields';
    icon: 'connector';
  };
  attributes: {
    title: Schema.Attribute.String;
    value: Schema.Attribute.Text;
  };
}

export interface ContentEvents extends Struct.ComponentSchema {
  collectionName: 'components_content_events';
  info: {
    displayName: 'Events';
    icon: 'earth';
  };
  attributes: {
    date_end: Schema.Attribute.Date;
    date_start: Schema.Attribute.Date;
    description: Schema.Attribute.RichText;
    featured_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    price: Schema.Attribute.Decimal;
    title: Schema.Attribute.String;
  };
}

export interface ContentPages extends Struct.ComponentSchema {
  collectionName: 'components_content_pages';
  info: {
    description: '';
    displayName: 'Pages';
    icon: 'apps';
  };
  attributes: {
    Blocks: Schema.Attribute.Component<'content.custom-blocks', true>;
    content: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface ContentPosts extends Struct.ComponentSchema {
  collectionName: 'components_content_posts';
  info: {
    description: '';
    displayName: 'Posts';
    icon: 'collapse';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    featured_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.String;
  };
}

export interface ContentProducts extends Struct.ComponentSchema {
  collectionName: 'components_content_products';
  info: {
    displayName: 'Products';
    icon: 'crown';
  };
  attributes: {
    gallery: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    price: Schema.Attribute.Decimal;
    stripe_url: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.custom-blocks': ContentCustomBlocks;
      'content.custom-fields': ContentCustomFields;
      'content.events': ContentEvents;
      'content.pages': ContentPages;
      'content.posts': ContentPosts;
      'content.products': ContentProducts;
    }
  }
}
