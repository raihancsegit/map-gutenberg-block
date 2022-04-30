/**
 * BLOCK: advanced-map
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './editor.scss';
import './style.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const {
    InspectorControls,
    BlockControls,
	AlignmentToolbar
} = wp.editor;

const {
    PanelBody,
    PanelRow,
    TextControl
} = wp.components;
 
const {
    Fragment
} = wp.element;
/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'cgb/block-advanced-map', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'advanced map' ), // Block title.
	icon: 'location-alt', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	supports: {
	    align: true
	},
	keywords: [
		__( 'advanced-map' ),
		__( 'map' ),
		__( 'map block' ),
	],
	attributes: {
        mapLocation: {
	    	type: 'string',
	        default: 'dhaka bangladesh'
	    },
	    mapHeight: {
	    	type: 'string',
	        default: '400px'
	    },
		mapWidth: {
	    	type: 'string',
	        default: '400px'
	    },
    },

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Component.
	 */
	edit: ( props ) => {
		// Creates a <p class='wp-block-cgb-block-advanced-map'></p>.
		const { mapLocation, mapHeight,mapWidth } = props.attributes;
		const {
        	setAttributes,
        	attributes,
        	className, // The class name as a string!
        	focus // this is "true" when the user clicks on the block
        } = props;

		function onMapLocationChange(changes){
			setAttributes({
				mapLocation:changes
			});

		}

		function onMapHeightChange(changes){
				setAttributes({
					mapHeight:changes
				});
			}
		function onMapWidthChange(changes){
					setAttributes({
						mapWidth:changes
					});
		}
		return ([
			<InspectorControls>
				<PanelBody>
					<p>{ __('Enter your location or address and map will be fetched from Google Maps.') }</p>
					<div>
						<TextControl
							label={ __( 'Location' ) }
							value={ attributes.mapLocation }
							onChange={ onMapLocationChange }
						/>
					</div>
					<div>
			        <TextControl
				        label={ __( 'Height' ) }
				        value={ attributes.mapHeight }
				        onChange={ onMapHeightChange }
				    />
			    	</div>
					<div>
						<TextControl
							label={ __( 'Width' ) }
							value={ attributes.mapWidth }
							onChange={ onMapWidthChange }
						/>
					</div>
				</PanelBody>
			</InspectorControls>,
			<div className={className}>
				<iframe
				width={mapWidth} marginheight="20" marginwidth="20"
					src={'//maps.google.com/maps?q=' + attributes.mapLocation + '&ie=UTF8&view=map&saddr=' + attributes.mapLocation + '&f=q&output=embed'}
					style={{ height: mapHeight }}>
				</iframe>
			</div>
		]);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {Object} props Props.
	 * @returns {Mixed} JSX Frontend HTML.
	 */
	save: ( props ) => {
		const { mapLocation, mapHeight,mapWidth } = props.attributes;
		const {
        	attributes,
        	className, // The class name as a string!
        } = props;
		return (
			<div className={className}>
	            <iframe width={mapWidth} marginheight="20" marginwidth="20"
	            	src={'//maps.google.com/maps?q=' + mapLocation + '&ie=UTF8&view=map&saddr=' + attributes.mapLocation + '&f=q&output=embed'}
	            	style={{ height: mapHeight}}>
	            </iframe>
	        </div>
		);
	},
} );
